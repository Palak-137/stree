import React from 'react'
import "../../App.css"
import "./feature.css"
import features from "../../assets/img/features.svg"
import details from "../../assets/img/details-1.png"
import details2 from "../../assets/img/details-2.png"
import details3 from "../../assets/img/details-3.png"
import details4 from "../../assets/img/details-4.png"


function feature() {
  return (
      <div>
            <main id="main">
            <section id="features" class="features">
            <div class="container">

                <div class="section-title">
                <h2>App Features</h2>
                <p>Sending money abroad just got cheaper and easier</p>
                </div>

                <div class="row no-gutters">
                <div class="col-6 d-flex align-items-stretch order-2 order-lg-1">
                    <div class="content d-flex flex-column justify-content-center">
                    <div class="row">
                        <div class="col-md-6 icon-box" data-aos="fade-up">
                        <i class="bx bx-receipt"></i>
                        <h4>Support your loved ones abroad.</h4>
                        <p>We believe that sending money should be as fast as sending an email. It takes a few minutes to set up your account, and most of our transfers go through instantly or on the same day.</p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Move your money between countries.</h4>
                        <p>Send money to more than 40 countries including Australia, Singapore, UK, UAE and US.</p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i class="bx bx-images"></i>
                        <h4>Send money on the go.</h4>
                        <p>Sign up online with your PAN card and proof of address in India. You can then send money from our website or app — anywhere, any time.</p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i class="bx bx-shield"></i>
                        <h4>Global support in a range of languages</h4>
                        <p>We don't do complicated, automated systems. We have offices around the world, and we're here to help you whenever you need it.</p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i class="bx bx-atom"></i>
                        <h4>The cheap, fast way to send money abroad.</h4>
                        <p>Sending money should be stress-free - no matter how far it's traveling. Our app and website are designed for you to manage your money on the go. And we've built a team that's dedicated to keeping your money safe, and the process watertight.</p>
                        </div>
                        <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <i class="bx bx-id-card"></i>
                        <h4>It should be low-cost and fair.</h4>
                        <p>The real exchange rate is the only fair one — and that's the one you get with Wise. And we show all our fees upfront. Why? Because markups and hidden fees are unfair, and finance has been unfair for too long.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="image col-6 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img src={features} class="img-fluid" alt=""/>
                </div>
                </div>

            </div>
            </section>

   
            <section id="details" class="details">
            <div class="container">

                <div class="row content" style={{ "display":"flex","flexDirection":"row" }}> 
                <div class="col" data-aos="fade-right">
                              <img src={details} class="img-fluid" alt="" style={{
                                  "width": "80%",
                                  "height": "80%"

                              }}/>
                </div>
                <div class="col pt-4" data-aos="fade-up">
                    <h3>It should be low-cost and fair.</h3>
                    <p class="fst-italic">
                    The real exchange rate is the only fair one — and that's the one you get with Wise. And we show all our fees upfront. Why? Because markups and hidden fees are unfair, and finance has been unfair for too long.
                    </p>
                    <ul>
                    <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check"></i> Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
                    <li><i class="bi bi-check"></i> Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
                    </ul>
                    <p>
                    Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
                    </p>
                </div>
                </div>

                <div class="row content" style={{ "display":"flex","flexDirection":"row" }}> 
                <div class="col" data-aos="fade-left">
                              <img src={details2} class="img-fluid" alt="" style={{
                                  "width": "70%",
                                  "height": "70%"

                              }}/>
                </div>
                <div class="col pt-5 order-2 order-md-1" data-aos="fade-up">
                    <h3>It should be easy.</h3>
                    <p class="fst-italic">
                    Sending money should be stress-free - no matter how far it's traveling. Our app and website are designed for you to manage your money on the go. And we've built a team that's dedicated to keeping your money safe, and the process watertight.
                    </p>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                    Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
                    </p>
                </div>
                </div>

                <div class="row content" style={{ "display":"flex","flexDirection":"row" }}> 
                <div class="col" data-aos="fade-right">
                              <img src={details3} class="img-fluid" alt="" style={{
                                  "width": "70%",
                                  "height": "70%"

                              }}/>
                </div>
                <div class="col pt-5" data-aos="fade-up">
                    <h3>Regulated around the world</h3>
                    <p>We're regulated by authorities around the world. This includes the FCA in the UK and FinCEN in the US.</p>
                    <ul>
                    <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                    </ul>
                    <p>
                    Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.
                    </p>
                    <p>
                    Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
                    </p>
                </div>
                </div>

                <div class="row content" style={{ "display":"flex","flexDirection":"row" }}> 
                <div class="col" data-aos="fade-left">
                              <img src={details4} class="img-fluid" alt="" style={{
                                  "width": "70%",
                                  "height": "70%"

                              }}/>
                </div>
                <div class="col pt-5 order-2 order-md-1" data-aos="fade-up">
                    <h3>Safeguarded with leading banks</h3>
                    <p class="fst-italic">
                    We hold your money with established financial institutions, so it's separate from our own accounts and in our normal course of business not accessible to our partners.
                    </p>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                    <li><i class="bi bi-check"></i> Et praesentium laboriosam architecto nam .</li>
                    <li><i class="bi bi-check"></i> Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</li>
                    <li><i class="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                    </ul>
                </div>
                </div>

            </div>
            </section>

            <section id="pricing" class="pricing">
            <div class="container">

                <div class="section-title">
                <h2>Pricing</h2>
                <p></p>
                </div>

                <div class="row no-gutters">

                <div class="col-lg-4 box" data-aos="fade-right">
                    <h3>Free</h3>
                    <h4>$999<span> transaction money </span></h4>
                    <ul>
                    <li><i class="bx bx-check"></i> no charges </li>
                    <li><i class="bx bx-check"></i> only goverment taxes will be claimed </li>
                    <li><i class="bx bx-check"></i> hussal free transaction </li>
                    <li class="na"><i class="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li class="na"><i class="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                    </ul>
                    <a href="#" class="get-started-btn">Get Started</a>
                </div>

                <div class="col-lg-4 box featured" data-aos="fade-up">
                    <h3>Business</h3>
                    <h4>0.7%<span>on every transaction below $10000</span></h4>
                    <ul>
                    <li><i class="bx bx-check"></i> This will include our service charges and goverment taxes </li>
                    <li><i class="bx bx-check"></i> hussal free transaction </li>
                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                    <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                    <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <a href="#" class="get-started-btn">Get Started</a>
                </div>

                <div class="col-lg-4 box" data-aos="fade-left">
                    <h3>PERO PAYER</h3>
                    <h4>$4.99<span>maximum charges on amount of $10000</span></h4>
                    <ul>
                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                    <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                    <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <a href="#" class="get-started-btn">Get Started</a>
                </div>

                </div>

            </div>
            </section>

           
            <section id="faq" class="faq section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">

                <h2>Frequently Asked Questions</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="accordion-list">
                <ul>
                    <li data-aos="fade-up">
                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1">Can i trust th services? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                        <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="100">
                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed">Is my money secure? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                        <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="200">
                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed">How to transfer money? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                        <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="300">
                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" class="collapsed">How do i confirm my email Address <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list">
                        <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="400">
                    <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" class="collapsed">How do i receive my stree payment? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list">
                        <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                        </p>
                    </div>
                    </li>

                </ul>
                </div>

            </div>
            </section>

           
            <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                <h2>Contact</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row">

                <div class="col-lg-6">
                    <div class="row">
                    <div class="col-lg-6 info">
                        <i class="bx bx-map"></i>
                        <h4>Address</h4>
                        <p>A108 Adam Street,<br/>New York, NY 535022</p>
                    </div>
                    <div class="col-lg-6 info">
                        <i class="bx bx-phone"></i>
                        <h4>Call Us</h4>
                        <p>+1 5589 55488 55<br/>+1 5589 22548 64</p>
                    </div>
                    <div class="col-lg-6 info">
                        <i class="bx bx-envelope"></i>
                        <h4>Email Us</h4>
                        <p>contact@example.com<br/>info@example.com</p>
                    </div>
                    <div class="col-lg-6 info">
                        <i class="bx bx-time-five"></i>
                        <h4>Working Hours</h4>
                        <p>Mon - Fri: 9AM to 5PM<br/>Sunday: 9AM to 1PM</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form" data-aos="fade-up">
                    <div class="form-group">
                        <input placeholder="Your Name" type="text" name="name" class="form-control" id="name" required/>
                    </div>
                    <div class="form-group mt-3">
                        <input placeholder="Your Email" type="email" class="form-control" name="email" id="email" required/>
                    </div>
                    <div class="form-group mt-3">
                        <input placeholder="Subject" type="text" class="form-control" name="subject" id="subject" required/>
                    </div>
                    <div class="form-group mt-3">
                        <textarea placeholder="Message" class="form-control" name="message" rows="5" required></textarea>
                    </div>
                    <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
            </section>

    </main>
                    



    </div>
  )
}

export default feature