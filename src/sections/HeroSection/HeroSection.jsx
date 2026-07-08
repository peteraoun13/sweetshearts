
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "../../data/images.js";
import { Container } from "../../components/common/Container/Container.jsx";

const ease = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="home-hero"
      aria-labelledby="home-hero-title"
    >
      <Container className="home-hero__inner">
        {/* Main editorial image */}
        <motion.figure
          className="home-hero__media"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  clipPath: "inset(0 0 100% 0)",
                }
          }
          animate={{
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.35,
            ease,
          }}
        >
          <motion.img
            src={images.heroCakeFullWidth}
            alt="Bespoke floral cake handcrafted by Sweet Hearts"
            fetchPriority="high"
            decoding="async"
            initial={
              shouldReduceMotion
                ? false
                : {
                    scale: 1.06,
                  }
            }
            animate={{
              scale: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.9,
              ease,
            }}
          />

          <div
            className="home-hero__media-softness"
            aria-hidden="true"
          />
        </motion.figure>

        {/* Main copy */}
        <motion.div
          className="home-hero__content"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -28,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.3,
            ease,
          }}
        >
          <h1
            id="home-hero-title"
            className="home-hero__title"
          >
            <span>Cakes with</span>
            <em>a story.</em>
          </h1>

          <Link
            to="/cakes"
            className="home-hero__discover"
          >
            <span>Discover our cakes</span>

            <ArrowRight
              size={17}
              strokeWidth={1.35}
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Small editorial accent */}
        <motion.div
          className="home-hero__accent"
          aria-hidden="true"
          initial={
            shouldReduceMotion
              ? false
              : {
                  scaleX: 0,
                }
          }
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.9,
            ease,
          }}
        />

      </Container>
    </section>
  );
}
