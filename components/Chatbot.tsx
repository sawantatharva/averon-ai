"use client";

import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    // 1) Add the CDN stylesheet first
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // 2) After the stylesheet finishes loading, inject our :root overrides,
    //    then boot the widget. This guarantees our vars win the cascade.
    const onLoad = () => {
      // Inject our CSS variables AFTER the CDN CSS
      const style = document.createElement("style");
      style.setAttribute("data-n8n-overrides", "true");
      style.textContent = `
        :root {
          --chat--color-primary: #0A84FF;
          --chat--color-primary-shade-50: #0066CC;
          --chat--color-primary-shade-100: #004C99;
          --chat--color-secondary: #1B1F2A;
          --chat--color-secondary-shade-50: #10131A;
          --chat--color-white: #FFFFFF;
          --chat--color-light: #1E222F;
          --chat--color-light-shade-50: #2A2E3D;
          --chat--color-light-shade-100: #353A4A;
          --chat--color-medium: #5C637A;
          --chat--color-dark: #0B0C10;
          --chat--color-disabled: #8A8A8A;
          --chat--color-typing: #999;
          --chat--spacing: 1rem;
          --chat--border-radius: 0.6rem;
          --chat--transition-duration: 0.2s;
          --chat--window--width: 400px;
          --chat--window--height: 600px;
          --chat--header-height: auto;
          --chat--header--padding: var(--chat--spacing);
          --chat--header--background: linear-gradient(90deg, #0A84FF, #004C99);
          --chat--header--color: var(--chat--color-white);
          --chat--header--border-top: none;
          --chat--header--border-bottom: none;
          --chat--heading--font-size: 1.5em;
          --chat--subtitle--font-size: inherit;
          --chat--subtitle--line-height: 1.6;
          --chat--textarea--height: 50px;
          --chat--message--font-size: 1rem;
          --chat--message--padding: var(--chat--spacing);
          --chat--message--border-radius: var(--chat--border-radius);
          --chat--message-line-height: 1.6;
          --chat--message--bot--background: #161A25;
          --chat--message--bot--color: #E2E8F0;
          --chat--message--bot--border: 1px solid #1E2533;
          --chat--message--user--background: var(--chat--color-primary);
          --chat--message--user--color: var(--chat--color-white);
          --chat--message--user--border: none;
          --chat--message--pre--background: rgba(255, 255, 255, 0.05);
          --chat--toggle--background: var(--chat--color-primary);
          --chat--toggle--hover--background: var(--chat--color-primary-shade-50);
          --chat--toggle--active--background: var(--chat--color-primary-shade-100);
          --chat--toggle--color: var(--chat--color-white);
          --chat--toggle--size: 64px;
        }

        /* Optional: nudge the toggle up a bit on mobile so it doesn't fight the iOS bar */
        @media (max-width: 640px) {
          n8n-chat-toggle { margin-bottom: 8px; }
        }
      `;
      document.head.appendChild(style);

      // Boot the widget via an ESM inline module (same as your snippet)
      const script = document.createElement("script");
      script.type = "module";
      script.textContent = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        createChat({
          webhookUrl: 'https://krithikanair.app.n8n.cloud/webhook/d052c635-69c0-4e69-ae2b-12dc9fc5142b/chat',
          // If you see default styles overriding again, set this to false:
          // useGlobalStyles: false
        });
      `;
      document.body.appendChild(script);

      // cleanup
      return () => {
        style.remove();
        script.remove();
      };
    };

    if (link.sheet) {
      // already loaded (rare)
      const cleanup = onLoad();
      return () => {
        document.head.removeChild(link);
        cleanup?.();
      };
    } else {
      link.addEventListener("load", onLoad, { once: true });
      return () => {
        link.removeEventListener("load", onLoad);
        document.head.removeChild(link);
      };
    }
  }, []);

  return null;
}