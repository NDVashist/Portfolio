$(document).ready(function () {
	var $window = $(window);
	var $navbar = $(".navbar");
	var $scrollUpBtn = $(".scroll-up-btn");
	var $html = $("html");
	var $menuItems = $(".navbar .menu li a");

	$window.scroll(function () {
		var scrollY = $window.scrollTop();
		$navbar.toggleClass("sticky", scrollY > 20);
		$scrollUpBtn.toggleClass("show", scrollY > 500);
	});

	$scrollUpBtn.click(function () {
		$html.animate({ scrollTop: 0 });
		$html.css("scrollBehavior", "auto");
	});

	$menuItems.click(function () {
		$html.css("scrollBehavior", "smooth");
	});

	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
	});

	// Typing Text Animation
	var typed = new Typed(".typing, .typing-2", {
		strings: ["DevOps Engineer", "frontend Developer", "Sketch Artist"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	// Owl Carousel
	$(".carousel").owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: { items: 1, nav: false },
			600: { items: 2, nav: false },
			1000: { items: 3, nav: false },
		},
	});
});
//  boxes animation

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '../rsc/NikhilDhimanResume.pdf'; // The URL to the file
    link.download = 'NikhilDhiman-Resume.pdf'; // The name to save the file as
    link.click();
});