import { GlobalNav } from "@/components/GlobalNav";
import { Cursor } from "@/components/primitives/Cursor";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { S01Cover } from "@/components/slides/S01Cover";
import { S02Invisible } from "@/components/slides/S02Invisible";
import { S03CeyoScan } from "@/components/slides/S03CeyoScan";
import { S04G2 } from "@/components/slides/S04G2";
import { S05Reddit } from "@/components/slides/S05Reddit";
import { S06Content } from "@/components/slides/S06Content";
import { S07ProgSEO } from "@/components/slides/S07ProgSEO";
import { S08PaidAds } from "@/components/slides/S08PaidAds";
import { S09PR } from "@/components/slides/S09PR";
import { S10Workstation } from "@/components/slides/S10Workstation";
import { S11Plan } from "@/components/slides/S11Plan";
import { S12Close } from "@/components/slides/S12Close";

export default function Page() {
  return (
    <main className="relative bg-ceyo-ink">
      <SmoothScroll />
      <Cursor />
      <GlobalNav />

      <div className="fixed inset-0 glow pointer-events-none" aria-hidden />
      <div className="fixed inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />

      <div className="relative z-10 snap-y">
        <S01Cover />
        <S02Invisible />
        <S03CeyoScan />
        <S04G2 />
        <S05Reddit />
        <S06Content />
        <S07ProgSEO />
        <S08PaidAds />
        <S09PR />
        <S10Workstation />
        <S11Plan />
        <S12Close />
      </div>
    </main>
  );
}
