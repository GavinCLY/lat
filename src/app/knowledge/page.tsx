import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="好书星球"
        description="好书星球是一个便捷的听书小程序，致力于为书籍爱好者提供高质量的有声阅读体验。用户可以在这里轻松找到丰富多样的有声书，涵盖经典文学、畅销小说、专业书籍等多个领域。无论是在通勤、运动还是放松时刻，好书星球都能为你带来沉浸式的听书享受。同时，平台还提供个性化推荐和书友互动，让你在探索知识和故事的同时，与志同道合的朋友分享阅读乐趣。让每一次聆听都成为一次心灵的旅行，尽在好书星球。"
      />
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="演义三国"
            paragraph="我们只有跨越历史，探究民俗，拆解文学，才能真正理解三国，才能回答：名著被剩下，它为何被剩下？"
            center
            mb="80px"
          />
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image src="/images/knowledge/banner.jpg" alt="video image" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative z-10 py-16 md:py-20 lg:py-28">
          <div className="container">
            <SectionTitle
              title="重返思想的变迁时代：中国哲学16讲"
              paragraph="挑选中国古代思想家中最具代表性的个体，用独创的“分析-判断-选择”哲学通用模板，拆解出中国人思想深处的源代码，带你一次性领略16种思想流派。"
              center
              mb="80px"
            />
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                  data-wow-delay=".15s"
                >
                  <div className="relative aspect-[77/40] items-center justify-center">
                    <Image src="/images/knowledge/banner-1.jpg" alt="video image" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </section>
    </>
  );
};

export default AboutPage;
