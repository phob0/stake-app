import { BuilderComponent, builder, BuilderContent } from '@builder.io/react';

// IMPORTANT: import the file that you call Builder.registerComponent
// anywhere you have <BuilderComponent />
import '../builder-registry'

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getStaticProps = async (context: any) => {
    // Dynamically fetch latest content from Builder.io API
    const hero = await builder.get('hero', { url: context.resolvedUrl });
    const first_slider = await builder.get('first-slider', { url: context.resolvedUrl });
    const first_statics = await builder.get('first-statics', { url: context.resolvedUrl });
    const second_slider = await builder.get('second-slider', { url: context.resolvedUrl });
    // console.log('content', content.data.blocks[0])
    return { props: {
        hero: hero || null,
        first_slider: first_slider || null, 
        first_statics: first_statics || null,
        second_slider: second_slider || null, 
    }}
  }

export default function Home( props : any ) {
    return (
        <>
            <div id="hero">
                <BuilderComponent content={props.hero} model="hero" />
            </div>
            <div id="first-slider">
                <BuilderComponent content={props.first_slider} model="first-slider" />
            </div>
            <div id="first-statics">
                <BuilderComponent content={props.first_statics} model="first-statics" />
            </div>
            <div id="second-slider">
                <BuilderComponent content={props.second_slider} model="second-slider" />
            </div>
            <div id="investment-calculator">
                <BuilderComponent content={props.investment_calculator} model="investment-calculator" />
            </div>
        </>
    )
}