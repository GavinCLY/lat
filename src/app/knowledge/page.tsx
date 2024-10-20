"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const AboutPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Breadcrumb
        pageName={t('knowledge-1')}
        description={t('knowledge-2')}
      />
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <Link href="/classes/11">
          <SectionTitle
            title={t('knowledge-3')}
            paragraph={t('knowledge-4')}
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
        </Link>
        <section className="relative z-10 py-16 md:py-20 lg:py-28">
          <div className="container">
            <Link href="/classes/12">
              <SectionTitle
                title={t('knowledge-5')}
                paragraph={t('knowledge-6')}
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
            </Link>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </section>
    </>
  );
};

export default AboutPage;
