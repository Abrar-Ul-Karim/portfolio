"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingMs?: number;
  deletingMs?: number;
  pauseMs?: number;
};

export default function TypingText({
  words,
  typingMs = 70,
  deletingMs = 40,
  pauseMs = 1600,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduce, setReduce] = useState(false);

  // যাদের OS এ "reduce motion" অন করা, তাদের জন্য typing এর বদলে সরাসরি বদলাবে
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Typing / deleting animation
  useEffect(() => {
    if (reduce) return;

    const word = words[index];
    const isComplete = text === word;

    let delay = deleting ? deletingMs : typingMs;
    if (!deleting && isComplete) delay = pauseMs;

    const timer = setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, reduce, words, typingMs, deletingMs, pauseMs]);

  // Reduced motion হলে ২.৫ সেকেন্ড পর পর শব্দ বদলাবে
  useEffect(() => {
    if (!reduce) return;

    let i = 0;
    setText(words[0]);
    const id = setInterval(() => {
      i = (i + 1) % words.length;
      setText(words[i]);
    }, 2500);

    return () => clearInterval(id);
  }, [reduce, words]);

  return (
    <>
      {/* Screen reader শুধু সব role একবার পড়বে */}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text || "\u200B"}
        <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-[0.12em] animate-pulse bg-accent" />
      </span>
    </>
  );
}
