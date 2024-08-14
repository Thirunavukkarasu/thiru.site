"use client";

export default function Subscribe() {
  function onClickSubmit() {
    window.open("https://buttondown.email/thirunavukkarasu", "popupwindow");
  }

  return (
    <section className="my-10 space-y-6 rounded-lg p-5 border">
      <div className="mb-6">
        <h2 className="text-2xl font-bold leading-relaxed tracking-wide text-zinc-600">
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
          className="w-96 rounded-lg border px-5 py-3"
        />
        <input
          type="submit"
          value="Subscribe Now"
          className="ml-5 cursor-pointer bg-zinc-900 text-white rounded-lg px-5 py-3 tracking-wider"
        />
      </form>
      <p>10 Subscribers - No Spam</p>
    </section>
  );
}
