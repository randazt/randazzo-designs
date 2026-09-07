import { useEffect, useRef, useState } from 'react'
import { conciergeModel } from '../firebase'

const welcomeMessage = {
  role: 'assistant',
  text: `Hi — I'm D.AI.SY, the Randazzo Designs client concierge.

What are you trying to create — or what are you trying to figure out?

You don't need to have it all worked out yet.`,
}

const starterPrompts = [
  'Explore Services',
  'Explore AI Experiences',
  'Explore Selected Work',
  'Help Me Choose',
]

function DaisyConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([welcomeMessage])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const chatRef = useRef(null)
  const panelRef = useRef(null)
  const launcherRef = useRef(null)
  const closeButtonRef = useRef(null)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  function getChat() {
    if (!chatRef.current) {
      chatRef.current = conciergeModel.startChat({
        history: [],
      })
    }

    return chatRef.current
  }

  function closeConcierge() {
    setIsOpen(false)

    window.setTimeout(() => {
      launcherRef.current?.focus()
    }, 0)
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    messagesEndRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'end',
    })
  }, [messages, isSending, isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    window.setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 0)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeConcierge()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const panel = panelRef.current

      if (!panel) {
        return
      }

      const focusableElements = Array.from(
        panel.querySelectorAll(
          [
            'a[href]',
            'button:not([disabled])',
            'textarea:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
          ].join(',')
        )
      ).filter(
        (element) =>
          !element.hasAttribute('hidden') &&
          element.getAttribute('aria-hidden') !== 'true'
      )

      if (focusableElements.length === 0) {
        event.preventDefault()
        panel.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement =
        focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (
        event.shiftKey &&
        activeElement === firstElement
      ) {
        event.preventDefault()
        lastElement.focus()
      } else if (
        !event.shiftKey &&
        activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [isOpen])

  async function sendMessage(messageText) {
    const message = messageText.trim()

    if (!message || isSending) {
      return
    }

    setMessages((current) => [
      ...current,
      {
        role: 'user',
        text: message,
      },
    ])

    setInput('')
    setError('')
    setIsSending(true)

    try {
      const chat = getChat()
      const result = await chat.sendMessage(message)
      const responseText = result.response.text()

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text: responseText,
        },
      ])
    } catch (requestError) {
      console.error(
        'D.AI.SY concierge request failed:',
        requestError
      )

      setError(
        'D.AI.SY could not complete that request. Please try again.'
      )
    } finally {
      setIsSending(false)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    await sendMessage(input)
  }

  function handleTextareaKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage(input)
    }
  }

  function handleStarterPrompt(prompt) {
    setInput(prompt)

    window.setTimeout(() => {
      textareaRef.current?.focus()
    }, 0)
  }

  function handleLauncherClick() {
    if (isOpen) {
      closeConcierge()
      return
    }

    setIsOpen(true)
  }

  return (
    <div className="daisy-concierge">
      {isOpen && (
        <section
          ref={panelRef}
          id="daisy-concierge-dialog"
          className="daisy-concierge__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="daisy-concierge-title"
          aria-describedby="daisy-concierge-description"
          tabIndex="-1"
        >
          <header className="daisy-concierge__header">
            <div>
              <p className="daisy-concierge__eyebrow">
                Randazzo Designs
              </p>

              <h2 id="daisy-concierge-title">
                D.AI.SY Client Concierge
              </h2>

              <p
                className="daisy-concierge__status"
                id="daisy-concierge-description"
              >
                AI assists. Humans decide.
              </p>
            </div>

            <button
              ref={closeButtonRef}
              className="daisy-concierge__close"
              type="button"
              onClick={closeConcierge}
              aria-label="Close D.AI.SY Client Concierge"
            >
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div
            className="daisy-concierge__messages"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((message, index) => (
              <div
                className={`daisy-concierge__message daisy-concierge__message--${message.role}`}
                key={`${message.role}-${index}`}
              >
                <p>{message.text}</p>
              </div>
            ))}

            {messages.length === 1 && (
              <div
                className="daisy-concierge__starters"
                aria-label="Conversation starters"
              >
                <p>Not sure how to begin?</p>

                <div>
                  {starterPrompts.map((prompt) => (
                    <button
                      type="button"
                      key={prompt}
                      onClick={() =>
                        handleStarterPrompt(prompt)
                      }
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <p
                className="daisy-concierge__error"
                role="alert"
              >
                {error}
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          <p
            className="sr-only"
            role="status"
            aria-live="polite"
          >
            {isSending
              ? 'D.AI.SY is preparing a response.'
              : ''}
          </p>

          {isSending && (
            <div
              className="daisy-concierge__message daisy-concierge__message--assistant"
              aria-hidden="true"
            >
              <p>D.AI.SY is thinking…</p>
            </div>
          )}

          <form
            className="daisy-concierge__form"
            onSubmit={handleSubmit}
          >
            <label
              className="daisy-concierge__label"
              htmlFor="daisy-concierge-input"
            >
              What are you trying to create — or figure out?
            </label>

            <textarea
              ref={textareaRef}
              id="daisy-concierge-input"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleTextareaKeyDown}
              placeholder="Tell D.AI.SY what you're working through..."
              rows="3"
              disabled={isSending}
              aria-describedby="daisy-concierge-input-hint daisy-concierge-boundary"
            />

            <div
              className="daisy-concierge__input-hint"
              id="daisy-concierge-input-hint"
            >
              <span>Enter to send</span>
              <span>
                Shift + Enter for a new line
              </span>
            </div>

            <div className="daisy-concierge__form-footer">
              <p id="daisy-concierge-boundary">
                D.AI.SY can help clarify and prepare.
                Pricing, availability, and project
                acceptance require human review.
              </p>

              <button
                type="submit"
                disabled={isSending || !input.trim()}
              >
                {isSending ? 'Sending…' : 'Send'}
              </button>
            </div>

            <a
              className="daisy-concierge__handoff"
              href="#contact"
            >
              Ready to talk with a person?
              <span aria-hidden="true"> →</span>
            </a>
          </form>
        </section>
      )}

      <button
        ref={launcherRef}
        className="daisy-concierge__launcher"
        type="button"
        onClick={handleLauncherClick}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="daisy-concierge-dialog"
        aria-label={
          isOpen
            ? 'Close D.AI.SY Client Concierge'
            : 'Ask D.AI.SY'
        }
      >
        <span aria-hidden="true">✦</span>
        <span>Ask D.AI.SY</span>
      </button>
    </div>
  )
}

export default DaisyConcierge