﻿import React, { Component } from "react";
import css from "./City.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";


export default class City extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu> 


				<main>
					<Hero blok={this.props.blok} contentTypeTag="city" /> {/*This code displays the hero section (title and image)*/}

					{/*The following code displays the intro/description*/}
					<div className={css["city-page__main-content"]}>
						<div id="city-page__short-description" key="city-page__short-description" className={css["city-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>City Details</h2>
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