import React, { Component } from "react";
import css from "./Location.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";


export default class Location extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu> 


				<main>
					<Hero blok={this.props.blok} contentTypeTag="location" /> {/*This code displays the hero section. WHY IS IT STILL CALLED COURSE?*/}

					{/*The following code displays the intro*/}
					<div className={css["location-page__main-content"]}>
						<div id="location-page__short-description" key="location-page__short-description" className={css["location-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Location Details</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
					</div>
					{/*The following code displays the list*/}
					{this.props.blok.additionalstuff.map((nestedBlok) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))}
				</main>
			</div>
		);

	}
}