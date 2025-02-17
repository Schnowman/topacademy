﻿import React, { Component } from "react";
import css from "./Song.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Song extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>	
				<Headermenu blok={this.props.menu.content}></Headermenu>
	

				<main>
					<Hero blok={this.props.blok} contentTypeTag="song" />

					<div className={css["song-page__main-content"]}>
						<div id="song-page__short-description" key="song-page__short-description" className={css["song-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Songtext</h2>
								<div className={css["rich-text-section__rich-text"]}>here comes the songtext{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
					</div>

					{this.props.blok.bottombloks && this.props.blok.bottombloks.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</main>
			</div>
		);	
	}
}	