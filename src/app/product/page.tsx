"use client"

import Breadcrumb from "@/components/Common/Breadcrumb";

import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";

const Blog = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Breadcrumb
        pageName={t('product-9')}
        description={t('product-10')}
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                <Image src="/images/product/cover-1.jpg" width="400" height="400" alt="image" />
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <Link
                      href="/classes/21"
                      className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                    >
                      {t('product-11')}
                    </Link>
                  </h3>
                  <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {t('product-12')}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                <Image src="/images/product/cover-2.jpg" width="400" height="400" alt="image" />
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <Link
                      href="/classes/22"
                      className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                    >
                      {t('product-13')}
                    </Link>
                  </h3>
                  <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {t('product-14')}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                <Image src="/images/product/cover-3.jpg" width="400" height="400" alt="image" />
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <Link
                      href="/classes/23"
                      className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                    >
                      {t('product-15')}
                    </Link>
                  </h3>
                  <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {t('product-16')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
