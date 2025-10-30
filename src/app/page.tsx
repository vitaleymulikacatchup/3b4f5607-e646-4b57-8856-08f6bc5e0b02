"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, MapPin, MessageCircle, Phone, Sparkles, Star, Trophy, Bed } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and comfort at Grand Vista Hotel, where every moment becomes an extraordinary memory"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Now", href: "https://booking.com" },
            { text: "View Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Hospitality Excellence"
          description="For over three decades, Grand Vista Hotel has been setting the standard for luxury hospitality, combining timeless elegance with modern sophistication"
          tag="Our Story"
          tagIcon={Award}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Recognized globally for exceptional guest experiences and attention to detail",
              icon: Trophy
            },
            {
              title: "Prime Location",
              description: "Located in the heart of the city with breathtaking views and easy access to attractions",
              icon: MapPin
            },
            {
              title: "Luxury Amenities",
              description: "World-class spa, fine dining, and exclusive facilities for the ultimate comfort",
              icon: Sparkles
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel elegant exterior architecture"
          imagePosition="left"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Indulge in our carefully curated collection of luxury amenities designed to exceed your every expectation"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and soul at our award-winning spa featuring premium treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa wellness center"
            },
            {
              id: "02",
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine crafted by world-renowned chefs in our elegant restaurants and bars",
              imageSrc: "https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Upscale hotel restaurant dining"
            },
            {
              id: "03",
              title: "Infinity Pool & Deck",
              description: "Unwind by our stunning infinity pool with panoramic city views and premium poolside service",
              imageSrc: "https://images.pexels.com/photos/10563314/pexels-photo-10563314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel swimming pool deck"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed with your comfort in mind"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe King Room",
              price: "$399/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel deluxe king room"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Executive Suite",
              price: "$699/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/8089070/pexels-photo-8089070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite living area"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$1,299/night",
              rating: 5,
              reviewCount: "756",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite bedroom"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Experience the exceptional service and luxury that our valued guests rave about"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "Tech Innovations Inc.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing VP",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5217854/pexels-photo-5217854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted Hospitality Network"
          description="Part of the world's most prestigious hotel groups and hospitality networks"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          tagIcon={Phone}
          title="Plan Your Perfect Stay"
          description="Ready to experience luxury? Contact our concierge team to plan your unforgettable visit to Grand Vista Hotel"
          inputPlaceholder="Enter your email"
          buttonText="Get In Touch"
          termsText="By submitting, you agree to receive updates about exclusive offers and hotel news."
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk reception"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" },
                { label: "Business Center", href: "business" },
                { label: "Valet Parking", href: "parking" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "reservations" },
                { label: "Guest Services", href: "services" },
                { label: "Location", href: "location" },
                { label: "Careers", href: "careers" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Vista Hotel"
        />
      </div>
    </ThemeProvider>
  );
}