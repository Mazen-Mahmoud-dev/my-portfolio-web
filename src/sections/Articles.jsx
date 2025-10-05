import useScrollReveal from "../hooks/useScrollReveal";


const articles = [
  {
    id: 1,
    title: "أفكار مشاريع عملية تبدأ بيها رحلتك 🚀",
    excerpt: `🎯 الأهم من إنك تحضر الكورسات وتشوفها إنك تطبق عليها 👌
في البوست ده شاركت أفكار مشاريع مناسبة للمبتدئين والمتوسطين وكمان للي بدأوا يتعلموا React.
من Landing Page لحد Blog UI، مع فيديوهات تساعدك تنفذ خطوة بخطوة.`,
    image: "/src/assets/Articles/Article1.jpg",
    url: "https://www.linkedin.com/posts/mazen-mahmoud-dev_frontend-aetaecaepaezaeyaehabraeqaezaetaeuaer-activity-7354887682268815360-UkXB?utm_source=share&utm_medium=member_desktop",
    tags: ["Frontend", "React", "JavaScript", "مشاريع برمجة"],
  },
  {
    id: 2,
    title: "10 CSS Tricks هتغير طريقة كتابتك للكود 🎨",
    excerpt: `لو فاكر إنك عارف CSS كويس، جرب الtricks دي 😎
من aspect-ratio لحد prefers-color-scheme، 
هتعرف إزاي تحل مشاكل معقدة بكود بسيط وتختصر وقت كبير في مشاريعك.`,
    image: "/src/assets/Articles/Article2.png",
    url: "https://www.linkedin.com/posts/mazen-mahmoud-dev_4cafef-4cafef-ddd-activity-7360698342990934016-EcfX?utm_source=share&utm_medium=member_desktop",
    tags: ["CSS", "Frontend", "Web Design", "UI Tricks"],
  },
  // {
  //   id: 3,
  //   title: "Data Science for Developers",
  //   excerpt:
  //     "Many developers want to get into data science but don’t know where to start. Here’s how you can leverage your programming skills to begin analyzing data...",
  //   image: "https://source.unsplash.com/1200x600/?datascience",
  //   url: "https://www.linkedin.com/posts/your-article-link-3",
  //   tags: ["Python", "Pandas", "Data Science"],
  // },
];

// تقطيع النص بعد عدد كلمات معين
const truncateByWords = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

export default function Articles() {
  const rootRef = useScrollReveal(".article-card", { start: "top 80%", stagger: 0.2 });
  return (
    <section className="my-16 px-4 max-w-6xl mx-auto" ref={rootRef}>
      <div className="text-center mb-12">
        <h5 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">What I Have Wrote</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200">My Useful Articles</h2>
      </div>

      <div className="grid gap-10">
        {articles.slice(0, 3).map((article) => (
          <div
            key={article.id}
            className="article-card w-full group dark:hover:shadow-primary-dark dark:hover:border-primary-dark relative grid gap-8 xl:grid-cols-2 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* الصورة */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* النصوص */}
            <div className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight dark:text-white" dir="rtl" >
                    {article.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 line-clamp-3 mt-8 md:line-clamp-none" dir="rtl">
                    {truncateByWords(article.excerpt, 25)}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-emerald-50 dark:bg-emerald-100 font-semibold text-emerald-700 border border-emerald-200 py-0.5 px-3 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* الأزرار */}
              <div className="mt-6 flex flex-wrap justify-between gap-3">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 hover:underline"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right h-4 w-4"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* زرار All Articles */}
      <div className="flex justify-center mt-12">
        <a href="/articles">
          <button className="border border-gray-400 cursor-pointer dark:border-gray-500 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:text-black transition-colors duration-300 group">
            All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 text-gray-500 dark:text-gray-300 transition-transform duration-300 group-hover:translate-x-1 dark:group-hover:text-gray-700"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

        </a>
      </div>
    </section>
  );
}
