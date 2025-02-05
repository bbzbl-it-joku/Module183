import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-orange-600 animate-fade-in">
            TaskFlow
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-delay">
            Stay organized and boost your productivity with our beautiful and intuitive todo app
          </p>

          <div className="mt-8 animate-fade-in-delay-2">
            <Link
              href="/todos"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg 
                        font-semibold transition-all duration-300 hover:shadow-lg inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg 
                         hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-orange-500 dark:text-orange-400 text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    icon: "✨",
    title: "Beautiful Interface",
    description: "A clean and intuitive design that makes task management a joy"
  },
  {
    icon: "🚀",
    title: "Boost Productivity",
    description: "Smart features to help you accomplish more in less time"
  },
  {
    icon: "🎯",
    title: "Stay Focused",
    description: "Keep track of your goals and maintain your momentum"
  }
];
