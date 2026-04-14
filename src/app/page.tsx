import { GlobalNav } from "@/components/GlobalNav";
import { Cursor } from "@/components/primitives/Cursor";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { S01Cover } from "@/components/slides/S01Cover";
import { S02G2 } from "@/components/slides/S02G2";
import { S03CeyoScan } from "@/components/slides/S03CeyoScan";
import { S04Reddit } from "@/components/slides/S04Reddit";
import { S05Content } from "@/components/slides/S05Content";
import { S06ProgSEO } from "@/components/slides/S06ProgSEO";
import { S07PaidPR } from "@/components/slides/S07PaidPR";
import { S08Dashboard } from "@/components/slides/S08Dashboard";
import { S09Plan } from "@/components/slides/S09Plan";
import { S10Close } from "@/components/slides/S10Close";

export default function Page() {
  return (
    <main className="relative bg-ceyo-ink">
      <SmoothScroll />
      <Cursor />
      <GlobalNav />

      {/* Ambient backgrounds fixed behind everything */}
      <div className="fixed inset-0 glow pointer-events-none" aria-hidden />
      <div className="fixed inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />

      <div className="relative z-10 snap-y">
        <S01Cover />
        <S02G2 />
        <S03CeyoScan />
        <S04Reddit />
        <S05Content />
        <S06ProgSEO />
        <S07PaidPR />
        <S08Dashboard />
        <S09Plan />
        <S10Close />
      </div>
    </main>
  );
}
