'use client';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AnimationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <div>{children}</div>;
}
