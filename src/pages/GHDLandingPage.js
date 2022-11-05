import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
// import Hero from 'components/hero/GHD-hero.js';
import Hero from 'components/hero/GHD-hero2.js';
import Features from 'components/features/ThreeColSimple.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColSingleFeatureWithStats2.js';

import Testimonial from 'components/testimonials/GHDTwoColumnWithImage.js';
import Testimonial0 from 'components/testimonials/SimplePrimaryBackground.js';
import Testimonial1 from 'components/testimonials/ThreeColumnWithProfileImage.js';
import Testimonial2 from 'components/testimonials/TwoColumnWithImage.js';
import Testimonial3 from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js';
import Testimonial4 from 'components/testimonials/TwoColumnWithImageAndRating.js';
import DownloadApp6 from 'components/cta/DownloadApp.js';
import Footer from 'components/footers/GHDMiniCenteredFooter.js';
import Footer0 from 'components/footers/FiveColumnWithInputForm.js';
import Footer1 from 'components/footers/FiveColumnDark.js';
import Footer2 from 'components/footers/FiveColumnWithBackground';
import Footer3 from 'components/footers/MiniCenteredFooter';
import Footer4 from 'components/footers/SimpleFiveColumn';
//   CUSTOM GHD COMPONENTS
import TabGrid from 'components/cards/GHDTabCardGrid.js';

import chefIconImageSrc from 'images/chef-icon.svg';
import celebrationIconImageSrc from 'images/celebration-icon.svg';
import shopIconImageSrc from 'images/shop-icon.svg';

export default () => {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
    return (
        <AnimationRevealPage>
            <Hero
                heading={
                    <>
                        {' '}
                        <HighlightedText>Customized For You.</HighlightedText>
                    </>
                }
                description='Whether it is a custom wall hanging, specialized cup, or custom shirts, we can make it special for you.'
                imageSrc='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
                imageCss={imageCss}
                imageDecoratorBlob={true}
                //primaryButtonText='Order Now'
                //watchVideoButtonText='Meet The Chefs'
            />
            {/* <MainFeature
                subheading={<Subheading>Established Since 2014</Subheading>}
                heading={
                    <>
                        We've been serving for
                        <wbr /> <HighlightedText>over 5 years.</HighlightedText>
                    </>
                }
                description={
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <br />
                        <br />
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Description>
                }
                buttonRounded={false}
                textOnLeft={false}
                primaryButtonText='Latest Offers'
                imageSrc={
                    'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
                }
                imageCss={imageCss}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
            /> */}
            {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
            <TabGrid
                heading={
                    <>
                        Checkout our <HighlightedText>Products</HighlightedText>
                    </>
                }
            />
            <Features
                heading={
                    <>
                        Custom <HighlightedText>Work</HighlightedText>
                    </>
                }
                cards={[
                    {
                        imageSrc: shopIconImageSrc,
                        title: 'Vinyl Lettering',
                        description:
                            'Wall scriptures, auto decals, window stickers...',
                        url: '#',
                    },
                    {
                        imageSrc: chefIconImageSrc,
                        title: 'Custom Drinkware',
                        description:
                            'Your quote, image or logo on your mugs, tublers or glasses',
                        url: '#',
                    },
                    {
                        imageSrc: celebrationIconImageSrc,
                        title: 'Custom T-shirts',
                        description:
                            'Custom work to express your thoughts and emotions.',
                        url: 'https://reddit.com',
                    },
                ]}
                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
            />

            <Testimonial
                subheading=''
                heading={
                    <>
                        Customers <HighlightedText>Love Us.</HighlightedText>
                    </>
                }
            />

            <Footer />
        </AnimationRevealPage>
    );
};
