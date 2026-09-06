import { useEffect, useRef, useState } from 'react'
import { conciergeModel } from '../firebase'

const welcomeMessage = {
  role: 'assistant',
  text: `Hi — I'm D.AI.SY, the Randazzo Designs client concierge.

What are you trying to create — or what are you trying to figure out?

You don't need to have it all worked out yet.`,
}

const starterPrompts = [
  'I know I need design help, but I’m not sure what kind.',
  'I’m planning a website and need help figuring out what it should do.',
  'I have a project idea, but I need help organizing it.',
]

function DaisyConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([welcomeMessage])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const chatRef = useRef(null)
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

  useEffect(() => {
    if (!isOpen) {
      return
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [messages, isSending, isOpen])

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => {
        textareaRef.current?.focus()
      }, 120)
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
      console.error('D.AI.SY concierge request failed:', requestError)

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

  function handleContainerKeyDown(event) {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  function handleStarterPrompt(prompt) {
    setInput(prompt)

    window.setTimeout(() => {
      textareaRef.current?.focus()
    }, 0)
  }

  return (
    <div
      className="daisy-concierge"
      onKeyDown={handleContainerKeyDown}
    >
      {isOpen && (
        <section
          className="daisy-concierge__panel"
          aria-label="D.AI.SY Client Concierge"
        >
          <header className="daisy-concierge__header">
            <div>
              <p className="daisy-concierge__eyebrow">
                Randazzo Designs
              </p>

              <h2>D.AI.SY Client Concierge</h2>

              <p className="daisy-concierge__status">
                AI assists. Humans decide.
              </p>
            </div>

            <button
              className="daisy-concierge__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close D.AI.SY Client Concierge"
            >
              ×
            </button>
          </header>

          <div
            className="daisy-concierge__messages"
            aria-live="polite"
            aria-busy={isSending}
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
                      onClick={() => handleStarterPrompt(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isSending && (
              <div className="daisy-concierge__message daisy-concierge__message--assistant">
                <p>D.AI.SY is thinking…</p>
              </div>
            )}

            {error && (
              <p className="daisy-concierge__error" role="alert">
                {error}
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

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
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Tell D.AI.SY what you're working through..."
              rows="3"
              disabled={isSending}
            />

            <div className="daisy-concierge__input-hint">
              <span>Enter to send</span>
              <span>Shift + Enter for a new line</span>
            </div>

            <div className="daisy-concierge__form-footer">
              <p>
                D.AI.SY can help clarify and prepare. Pricing,
                availability, and project acceptance require human
                review.
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
        className="daisy-concierge__launcher"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
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