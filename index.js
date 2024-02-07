

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const rangeSliders = document.querySelectorAll(".range-slider__range");

    rangeSliders.forEach((slider) => {
      updateRangeWidth(slider);

      slider.addEventListener("input", function() {
        updateRangeWidth(this);
      });
    });

    function updateRangeWidth(slider) {
      const percentage = (slider.value / (slider.max - slider.min)) * 100;
      slider.style.background = `linear-gradient(to right, #F15A24 0%, orange ${percentage}%, #3498db ${percentage}%, #232D8E 100%)`;
    }
  });

  function resetValue(slider, index) {
    const fixedValues = [450, 400, 470, 350];
    slider.value = fixedValues[index - 1];
  }

function triggerCloudy() {
	link = document.getElementById("urlArea").value;
	if (link.length > 15 && myRegex.test(link)) {
		anchorURL.href=link;
		var myPlayer = videojs("player");
		myPlayer.src(link);
		myPlayer.play();
	} else {
		$("#urlArea").effect( "highlight", {color:"#ff0000"}, 500 );
	}
}


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log('Subscription successful:', data);
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("email").value = "";
    })
    .catch(error => {
        console.error('There was a problem with your subscription:', error);
    });
});
});

document.addEventListener("DOMContentLoaded", () => {
  const cardBg = document.getElementById("card-bg");
  if (cardBg) {
    cardBg.addEventListener("canplay", () => {
      cardBg.style.display = "block";
    });

    let card = document.querySelector(".cardvid");
    let container = document.querySelector(".containers");
    let r = card.getBoundingClientRect();
    let strength = 5;
    let center = {
      x: r.left + r.width / 2,
      y: r.top + r.height / 2
    };
    let dif = {
      x: 0,
      y: 0
    };
    let transform = {
      x: 0,
      y: 0
    };

    document.addEventListener("mousemove", (event) => {
      dif = {
        x: ((event.clientX - center.x) / r.width) * 2,
        y: ((event.clientY - center.y) / r.height) * 2
      };
      transform = {
        x: dif.y * strength * -1,
        y: dif.x * strength
      };
    });

    container.addEventListener("mousemove", (event) => {
      gsap.to(card, {
        rotateX: `${transform.x}deg`,
        rotateY: `${transform.y}deg`,
        overwrite: true,
        duration: 0.2
      });
    });

    container.addEventListener("mouseleave", (event) => {
      gsap.to(card, {
        rotateX: "0deg",
        rotateY: "0deg",
        overwrite: true
      });
    });
  } else {
    console.error("Video element not found.");
  }
});
