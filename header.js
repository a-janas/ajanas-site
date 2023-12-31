class headerNavbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<a href='./index.html#'><img src="./images & icons/Ajanas logo.svg" style="height: 3rem;" title ="Homepage" alt="Ajanas"></a>
			<nav class="navbar">
				<span class="material-symbols-outlined burger-icon" id="menuIcon">menu</span>
				<ul>
					<li><a class="button button-navbar" href="./index.html#aboutMe">About Me</a></li>
					<li><div id="projects"><a class="button button-navbar" href="./index.html#myProjects" title="Click here to see a list of my projects">My projects</a>
						<div class="dropdown">
							<ul>
								<li><a href="./projects/uxberries.html" class="button button-navbar" title="Case study – students' organization service design">UXberries</a></li>
								<li><a href="./projects/cometogether.html" class="button button-navbar" title="Case study – obile app for musicians">Come Together</a></li>
								<li><a href="./projects/work.html" class="button button-navbar" title="Case study — communication audit and improvement in my work">Communication at work</a></li>
								<li><a href="./projects/kd.html" class="button button-navbar" title="Case study – website for a sports' club">krakowdragons.pl</a></li>
							</ul>
						</div>
					</div></li>
					<li><a class="button button-navbar">Resume <span class="material-symbols-outlined">open_in_new</span></a></li>
					<li><a class="button button-navbar button-primary" href="index.html#contact">Contact me</a></li>
				</ul>
			</nav>
		`
	}
};

// I can't set up a root relative url, as it doesn't work in the debugger
class headerNavbarProject extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<a href='../index.html#'><img src="../images & icons/Ajanas logo.svg" style="height: 3rem;" title ="Homepage" alt="Ajanas"></a>
			<nav class="navbar">
				<span class="material-symbols-outlined burger-icon" id="menuIcon">menu</span>
				<ul>
					<li><a class="button button-navbar" href="../index.html#aboutMe">About Me</a></li>
					<li><div id="projects"><a class="button button-navbar" href="../index.html#myProjects" title="Click here to see a list of my projects">My projects</a>
						<div class="dropdown">
							<ul>
								<li><a href="./uxberries.html" class="button button-navbar" title="Case study – students' organization service design">UXberries</a></li>
								<li><a href="./cometogether.html" class="button button-navbar" title="Case study – obile app for musicians">Come Together</a></li>
								<li><a href="./work.html" class="button button-navbar" title="Case study — communication audit and improvement in my work">Communication at work</a></li>
								<li><a href="./kd.html" class="button button-navbar" title="Case study – website for a sports' club">krakowdragons.pl</a></li>
							</ul>
						</div>
					</div></li>
					<li><a class="button button-navbar">Resume <span class="material-symbols-outlined">open_in_new</span></a></li>
					<li><a class="button button-navbar button-primary" href="../index.html#contact">Contact me</a></li>
				</ul>
			</nav>
		`
	}
};

customElements.define("header-navbar", headerNavbar);
customElements.define("header-navbar-project", headerNavbarProject);