import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Blogpost extends Component {

	constructor(props) {
		super(props);
	}
	//this is the structure of an individual blogpost (an specific component)
	//after this point the comments need to be started and ended like this: {/* ... */}
	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu> {/*Ensures the "Blog" menu item appears in the navigation.*/}
				
				{/* starting from here I need to figure out what the problem is in regards to styling */}
				
				<main>
					<Hero blok={this.props.blok} contentTypeTag="blogpost" />

					<div className={css["blogpost-page__main-content"]}>
						<div id="blogpost-page__short-description" key="blogpost-page__short-description" className={css["blogpost-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>What I want to talk about</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.content})}</div>
							</section>
						</div>
					</div>
					{/* {this.props.blok.additionalstuff.map((nestedBlok) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))} */}
				</main>
			</div>
		);

	}
}