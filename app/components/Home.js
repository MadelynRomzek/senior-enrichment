import React from 'react';
import AllCampuses from './AllCampuses';

/*
	CONNIE: again about the inline styling. Several of these, as I'm noticing, are
	repeatedly defined in each component file. Why not just create a .style100 class
	in some css file and plug it in?

	Overall though, I will say your website looks quite good.
*/

var style100 = {
	width: '100%'
};

var style99 = {
	width: '99%'
};

var styleMaxWidth1564 = {
	maxWidth: '1564px'
};

var textCenter = {
	textAlign: "center"
};

var styleMaxWidth1500 = {
	maxWidth: '1500px'
};

export default function Home() {
	return (
		<div>
			<header className="w3-display-container w3-content w3-wide" style={styleMaxWidth1500} id="home">
				<img className="w3-image" src="/images/header.jpg" style={style100} />
				<div className="w3-display-middle w3-margin-top w3-center">
					<h1 className="w3-xxlarge w3-text-white">
						<span className="w3-padding w3-black w3-opacity-min">
							<b>MH</b>
						</span>{' '}
						<span className="w3-hide-small w3-text-light-grey">Interplanetary Academy</span>
					</h1>
				</div>
			</header>

			<div className="w3-content w3-padding" style={styleMaxWidth1564}>

				<AllCampuses />

				<div className="w3-container w3-padding-32" id="about">
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16" style={textCenter}><b>About</b></h3>
					<p>
						Tbh godard truffaut hella. Try-hard live-edge pinterest, fingerstache wolf hashtag dreamcatcher
						brunch. Cronut slow-carb pop-up, organic man braid microdosing chia fashion axe gochujang
						kickstarter plaid. Leggings venmo heirloom art party ennui organic palo santo. Fam kale chips
						artisan, palo santo messenger bag scenester taxidermy pork belly bicycle rights squid
						fingerstache narwhal. Wayfarers viral wolf, pinterest williamsburg thundercats celiac. Marfa
						paleo roof party pabst keffiyeh, hoodie pickled butcher everyday carry vinyl tilde williamsburg.
						Etsy mumblecore actually master cleanse ramps snackwave. Farm-to-table church-key next level
						williamsburg skateboard prism kombucha. Tilde semiotics cornhole, etsy kale chips kickstarter
						unicorn williamsburg you probably haven't heard of them hot chicken poke pabst. Tattooed prism
						lomo pitchfork, actually cred DIY. Tilde wolf aesthetic, twee venmo truffaut small batch
						kombucha.
					</p>

					<p>
						Viral seitan synth paleo tote bag selfies activated charcoal chambray master cleanse vape. Lo-fi
						cliche man braid edison bulb echo park listicle. Butcher echo park fam next level locavore tbh
						crucifix vexillologist. 8-bit unicorn thundercats mumblecore intelligentsia ramps. Trust fund
						direct trade unicorn, locavore distillery cornhole hot chicken cray photo booth put a bird on it
						+1 mlkshk meditation af. Bespoke aesthetic deep v hella taiyaki. Chillwave readymade sustainable
						tilde unicorn meh drinking vinegar gentrify. Meditation paleo disrupt vinyl waistcoat. Fixie
						poutine before they sold out, mumblecore organic lyft bushwick trust fund. Irony unicorn vice
						tbh. Jean shorts flannel drinking vinegar adaptogen umami, bitters paleo shabby chic brooklyn
						cray glossier fingerstache. Four dollar toast messenger bag yr trust fund butcher, irony
						pitchfork scenester lomo selvage succulents.
					</p>

					<p>
						Adaptogen deep v offal meggings crucifix sartorial, tousled cred ugh craft beer. Vegan semiotics
						locavore stumptown. Celiac echo park affogato schlitz post-ironic VHS. Lyft pickled four loko
						crucifix hashtag. Taiyaki ennui street art shaman small batch. Pok pok sustainable kitsch migas
						air plant butcher palo santo XOXO keytar hexagon sriracha four dollar toast fixie YOLO
						pinterest. Coloring book offal green juice helvetica deep v pug seitan pok pok. Palo santo
						street art church-key iceland plaid ramps aesthetic, green juice marfa polaroid forage
						distillery. Roof party pitchfork etsy church-key narwhal put a bird on it. Vexillologist taiyaki
						ethical squid brunch yr blue bottle YOLO intelligentsia gastropub. Chambray crucifix four dollar
						toast, bicycle rights church-key viral coloring book. Hashtag before they sold out ennui
						intelligentsia, vape franzen air plant etsy tattooed tumblr aesthetic. Pitchfork woke 3 wolf
						moon meh flannel typewriter humblebrag put a bird on it. Migas vegan stumptown 90's tumeric
						hoodie selvage. Tbh fashion axe distillery williamsburg.
					</p>

					<p>
						Ethical shoreditch letterpress forage lo-fi +1 skateboard affogato paleo chillwave. Messenger
						bag wayfarers four dollar toast kogi, bitters vegan bicycle rights. Semiotics man bun
						kickstarter normcore literally viral. Drinking vinegar deep v palo santo, cold-pressed pork
						belly austin flexitarian thundercats pabst air plant pop-up. Lo-fi lomo meditation keytar
						bespoke fanny pack. Cornhole gluten-free williamsburg adaptogen hexagon bitters pitchfork
						iceland. Polaroid art party iceland, tattooed letterpress lo-fi succulents banjo meditation
						tousled truffaut 8-bit leggings. Artisan sriracha asymmetrical single-origin coffee, poutine
						vinyl banh mi sartorial prism small batch cold-pressed. Food truck whatever wayfarers raw denim,
						iceland chartreuse lo-fi church-key pickled. Poke palo santo schlitz, la croix vaporware lyft
						live-edge raclette disrupt knausgaard pug stumptown drinking vinegar skateboard fingerstache.
						Fingerstache forage butcher, 3 wolf moon craft beer humblebrag yr sustainable pitchfork plaid
						palo santo DIY kinfolk iPhone glossier. Air plant poke taiyaki, af tumblr microdosing authentic
						readymade craft beer quinoa taxidermy.
					</p>
				</div>

				{/* <div className="w3-row-padding w3-grayscale">
					<div className="w3-col l3 m6 w3-margin-bottom">
						<img src="/w3images/team2.jpg" alt="John" style={style100} />
						<h3>John Doe</h3>
						<p className="w3-opacity">CEO & Founder</p>
						<p>
							Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
							elementum.
						</p>
						<p>
							<button className="w3-button w3-light-grey w3-block">Contact</button>
						</p>
					</div>
					<div className="w3-col l3 m6 w3-margin-bottom">
						<img src="/w3images/team1.jpg" alt="Jane" style={style100} />
						<h3>Jane Doe</h3>
						<p className="w3-opacity">Architect</p>
						<p>
							Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
							elementum.
						</p>
						<p>
							<button className="w3-button w3-light-grey w3-block">Contact</button>
						</p>
					</div>
					<div className="w3-col l3 m6 w3-margin-bottom">
						<img src="/w3images/team3.jpg" alt="Mike" style={style100} />
						<h3>Mike Ross</h3>
						<p className="w3-opacity">Architect</p>
						<p>
							Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
							elementum.
						</p>
						<p>
							<button className="w3-button w3-light-grey w3-block">Contact</button>
						</p>
					</div>
					<div className="w3-col l3 m6 w3-margin-bottom">
						<img src="/w3images/team4.jpg" alt="Dan" style={style100} />
						<h3>Dan Star</h3>
						<p className="w3-opacity">Architect</p>
						<p>
							Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
							elementum.
						</p>
						<p>
							<button className="w3-button w3-light-grey w3-block">Contact</button>
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}

{
	/* <div className="w3-container w3-padding-32" id="contact">
    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
    <p>Lets get in touch and talk about your and our next project.</p>
    <form action="/action_page.php" target="_blank">
      <input className="w3-input" type="text" placeholder="Name" required name="Name"></input>
      <input className="w3-input w3-section" type="text" placeholder="Email" required name="Email">
      <input className="w3-input w3-section" type="text" placeholder="Subject" required name="Subject">
      <input className="w3-input w3-section" type="text" placeholder="Comment" required name="Comment">
      <button className="w3-button w3-black w3-section" type="submit">
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
  </div> */
}
