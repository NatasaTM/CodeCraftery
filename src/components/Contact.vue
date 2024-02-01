<template>
  <!-- contact me section-->
<!-- Wrapper container -->
<div class="custom-container py-4 px-5">

<!-- Bootstrap 5 starter form -->
<form id="contactForm">

  <div class="mb-3">
    <h2 class="probootstrap-heading text-center text-white">Contact Me</h2>
    <p class="lead text-white">Feel free to get in touch with me. Whether you have questions, feedback, or just want to say hello, I'd love to hear from you. Fill out the form below, and I'll get back to you as soon as possible.</p>
  </div>

  <!-- Name input -->
  <div class="mb-3">
    <label class="form-label text-white" type ="text" for="name">Name</label>
    <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
    <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
  </div>

  <!-- Email address input -->
  <div class="mb-3">
    <label class="form-label text-white">Email:</label>
    <input placeholder="Email Address" class="form-control" id="emailAddress" type="email" required v-model="email">
    <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
    <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
  </div>

  <!-- Message input -->
  <div class="mb-3">
    <label class="form-label text-white" for="message">Message</label>
    <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required"></textarea>
    <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
  </div>

  <!-- Form submissions success message -->
  <div class="d-none" id="submitSuccessMessage">
    <div class="text-center mb-3">Form submission successful!</div>
  </div>

  <!-- Form submissions error message -->
  <div class="d-none" id="submitErrorMessage">
    <div class="text-center text-danger mb-3">Error sending message!</div>
  </div>

  <!-- Form submit button -->
  <div class="d-grid">
    <button class="btn btn-custom btn-lg mb-3" type="submit">Submit</button>
  </div>

</form>

<hr class="text-white">
<h3 class="text-white text-center mb-3">Find Me On Social Media</h3>
<ul class="list-inline banner-social-buttons text-center">
<!-- Linkedin-->
<li class="list-inline-item">
<a class="btn btn-custom btn-lg mb-3"  href="https://www.linkedin.com/in/natasa-todorov-markovic-91172952/" role="button" target="_blank"
><i class="fab fa-linkedin-in me-2"></i>LinkedIn</a
>
</li>
<li class="list-inline-item">
<a class="btn btn-custom btn-lg mb-3"  href="https://github.com/NatasaTM" role="button" target="_blank"
><i class="fab fa-github me-2"></i>GitHub</a
>
</li>

</ul>


</div>
<!--end of contact me section-->
</template>

<script>
export default {
    name: 'Contact'
}
</script>