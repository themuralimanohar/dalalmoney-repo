import { markdownify } from "@lib/utils/textConverter";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import Link from "next/link";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Pricing = ({ data }) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);
  const { frontmatter } = data;
  const {
    title,
    features,
    content,
  } = frontmatter;

  return (
    <>
      <section className="pricing section pt-0">
        <Banner title={title} />
        {/* Features */}
        <section className="section">
            <div className="container text-center">
            <div className="animate">
                <p className="uppercase">{features.sub_title}</p>
                {markdownify(features.title, "h2", "mt-4 section-title")}
                {markdownify(features.description, "p", "mt-10")}
            </div>
            <div className="animate from-right relative mt-10">
                <Swiper
                slidesPerView={1}
                pagination={{
                    type: "bullets",
                    el: paginationRef.current,
                    clickable: true,
                    dynamicBullets: true,
                }}
                // autoplay={{ delay: 3000 }}
                onBeforeInit={(swiper) => {
                    swiper.params.pagination.el = paginationRef.current;
                }}
                modules={[Pagination]}
                breakpoints={{
                    768: {
                    slidesPerView: 2,
                    },
                    1200: {
                    slidesPerView: 3,
                    },
                }}
                >
                {features.list.map((item, index) => (
                    <SwiperSlide key={"feature-" + index}>
                    <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                        <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                        <FeatherIcon icon={item.icon} />
                        </div>
                        <h2 className="h3 mt-6 mb-2">{item.title}</h2>
                        <h4 className="h4 mt-2 mb-6 pb-6">{item.amount}</h4>
                        <p>{item.listitem1}</p>
                        <p>{item.listitem2}</p>
                        <p>{item.listitem3}</p>
                        <p>{item.listitem4}</p>
                        <p>{item.listitem5}</p>
                        <div className="banner-btn mt-8 pt-8">
                            <Link className="btn btn-primary" href={item.link.href}>
                                {item.link.label}
                            </Link>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className="relative mt-9 flex justify-center">
                <div className="pagination " ref={paginationRef}></div>
                </div>
            </div>
            </div>
        </section>
      </section>
      <Cta />
    </>
  );
};

export default Pricing;
