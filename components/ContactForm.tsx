'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

type ContactFormProps = {
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  thankYouText: string;
};

export const ContactForm = ({
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  submitText,
  thankYouText
}: ContactFormProps) => {
  const [state, handleSubmit] = useForm("xyzwbqnp");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-center mt-4 animate-fade-in-vhs">
        ✅ {thankYouText}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-fade-in-vhs">
      <div>
        <label htmlFor="email" className="block text-white mb-1">
          {emailLabel}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder={emailPlaceholder}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-1">
          {messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder={messagePlaceholder}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="self-center px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
      >
        {submitText}
      </button>
    </form>
  );
};