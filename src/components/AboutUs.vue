<script setup>
import '../components/AboutUs.css'

const winslow_info = {
  name: "O. Winslow Edwards",
  pronouns: "they/them",
  bio: "Winslow is a nonbinary queer of mixed Jamaican and white US settler ancestry, based in Atlanta, GA. They love gardening with their pup Regina, foraging for mushrooms and eating tasty food with friends. They completed their Masters of Public Health in 2020 and are published in the fields of LGBTQIA2S+ health and resilience. More recently, Winslow completed a full-stack software development bootcamp. They are excited to apply their knowledge from public health to the creation of apps that can support diverse LGBTQIA2S+ communities. As someone who is neurodivergent, navigating chronic conditions, and on HRT, they regularly see many health care providers. They hope Provide will help others have an easier time finding providers who help and don't harm.",
}

const maz_info = {
  name: "Maz Weir",
  pronouns: "they/them",
  bio: "Born and raised in Atlanta, Maz is an avid reader, outdoor adventurer, yoga practitioner and community-builder. They spent the last 6 years in Athens, where they attended the University of Georgia, receiving degrees in International Affairs and Spanish. Post-graduation, Maz ran an event company, hosting dance events for the queer community and a mutual aid group, providing support to houseless folks. They returned to Atlanta in September of 2022 to attend a full-stack coding bootcamp. Maz looks forward to using their community-building and computer programming skills to create more equitable outcomes for LGBTQIA2S+ folks in tech spaces.",

}
// console.log(team_mbr_info)

</script>

<template>
  <div class="provide-explanation-container">
    <div class="provide-explanation">
      <h2>Why Provide?</h2>
      <h4>We created Provide because we know how hard it can be to locate health care providers who create a safe and affirming environment for diverse LGBTQIA2S+ folks. When we say LGBTQIA2S+, we mean:</h4> 
      <ul>
        <li>lesbian</li>
        <li>gay</li>
        <li>bisexual</li>
        <li>transgender</li>
        <li>queer + questioning</li>
        <li>intersex</li>
        <li>asexual</li>
        <li>Two-spirit</li>
        <li>+ infinite ✨magical✨ expressions of diverse genders and sexualities</li>
      </ul>
    </div>
  </div>
  <div class="provide-explanation-container">
    <div class="provide-explanation">
      <h2>How does Provide work?</h2>
      <h4>Provide allows you to search and review any provider with an NPI (National Provider Identification) number, which includes any health care provider who accepts any kind of health insurance (including Medicare and Medicaid), including:</h4>
      <ul>
        <li>doctors</li>
        <li>physician assistants</li>
        <li>nurse practitioners</li>
        <li>physical and occupational therapists</li>
        <li>dentists</li>
        <li>optometrists</li>
        <li>social workers, counselors and therapists</li>
        <li>psychiatrists</li>
        <li>and more!</li>
      </ul>
    </div>
  </div>
  <div class="provide-explanation-container">
    <div class="provide-explanation">
      <h2>What should I know?</h2>
      <h4>On Provide, you can post and delete your own reviews. You can also read and like others reviews. Any reviews you post are posted anonymously, which means that other users cannot see the username or any other identifying info of the person who posted a given review. On your account page, you can see and delete any review you have written and you can also see any reviews you have liked. To create a new review, search a provider and then fill in your review info and click submit!</h4>
    </div>
  </div>
  <div class="provide-explanation-container">
    <div class="provide-explanation">
      <h2>What are future plans for Provide?</h2>
      <h4>We recognize that individual experiences with a provider are impacted by structural systems of power and oppression such as:</h4>
      <ul>
        <li>racism and colonialism</li>
        <li>colorism and featurism</li>
        <li>sexism and misogynoir</li>
        <li>transphobia and cissexism</li>
        <li>transmisogyny and transmysogynoir</li>
        <li>homophobia and heteronormativity</li>
        <li>sizeism and fatphobia</li>
        <li>ableism</li>
        <li>classism</li>
        <li>citizenship status</li>
        <li>and more ☹️</li>
      </ul>
      <h4> We are actively thinking about ways to encompass these important aspects of experiences with providers that may be helpful for other community members as they make decisions about who they want to see. For now, if it feels comfortable to include, please share in your review whatever feels relevant. Remember that your reviews are seen anonymously, i.e. other users don't see a username or any other identifying information attached to the reviews you post on Provide.</h4>
    </div>
  </div>
  <div class="about-us-container">
    <div class="about-us-img-container">
      <img class="about-us-img" src="../assets/images/about-us-yellow.png" alt="big, dark green bubble letter text that says about us">
    </div>
    <div class="winslow">
      <div class="about-us-child-1">
        <img alt="photo of team member"
        src="../assets/images/winslow.jpg"
        height="" width="275">
      </div>
      
      <div class="about-us-child-2">
        <img src="../assets/images/o-winslow-edwards-pronouns.png" width="700" height="100">
        <p>{{ winslow_info["bio"] }}</p>
      </div>     
    </div>
  </div>
  <div class="about-us-container">
    <div class="maz">
      <div class="about-us-child-1">
        <img alt="photo of team member"
        src="../assets/images/maz.jpg"
        height="" width="275">
      </div>
      
      <div class="about-us-child-2">
        <img src="../assets/images/maz-weir-pronouns.png" width="350" height="100">
        <p>{{ maz_info.bio }}</p>
      </div>
    </div>
</div>
</template>


