"use client";

export default function Subscribe() {
  function onClickSubmit() {
    window.open("https://buttondown.email/thirunavukkarasu", "popupwindow");
  }

  return (
    <section className="my-10 space-y-6 rounded-lg bg-gray-700 px-8 py-5 text-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold leading-relaxed tracking-wide text-orange-600">
          Subscribe to my newsletter
        </h2>
        <p className="text-base tracking-wider">
          Get emails about SaSS development, javascript, frameworks and
          leadership to your inbox.
        </p>
      </div>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/thirunavukkarasu"
        method="post"
        target="popupwindow"
        onSubmit={onClickSubmit}
        className="embeddable-buttondown-form"
      >
        <label htmlFor="bd-email" className="sr-only">
          Enter your email
        </label>
        <input
          type="email"
          name="email"
          id="bd-email"
          className="w-96 rounded-lg bg-orange-200 px-5 py-3"
        />
        <input
          type="submit"
          value="Subscribe Now"
          className=" ml-5 cursor-pointer rounded-lg bg-orange-800 px-5 py-3 tracking-wider"
        />
      </form>
      <p>10 Subscribers - No Spam</p>
    </section>
  );
}
