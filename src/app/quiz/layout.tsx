import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin Quiz | Teen Acne Solutions",
  description:
    "Take our 2-minute quiz to find the perfect acne routine for your teen. Personalized recommendations based on skin type, severity, and goals.",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return children directly — the quiz page renders its own header/chrome
  return <>{children}</>;
}
