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
    const investment_calculator = await builder.get('investment-calculator', { url: context.resolvedUrl });
    const third_slider = await builder.get('third-slider', { url: context.resolvedUrl });
    const second_statics = await builder.get('second-statics', { url: context.resolvedUrl });

    return { props: {
        hero: hero || null,
        first_slider: first_slider || null, 
        first_statics: first_statics || null,
        second_slider: second_slider || null, 
        investment_calculator: investment_calculator || null,
        third_slider: third_slider || null,  
        second_statics: second_statics || null,
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
            <div id="third-slider">
                <BuilderComponent content={props.third_slider} model="third-slider" />
            </div>
            <div id="second-statics">
                <BuilderComponent content={props.second_statics} model="second-statics" />
            </div>
        </>
    )
}