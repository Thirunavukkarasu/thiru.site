import { formatDate } from '@/lib/utils'
import { ArrowIcon } from '@/ui/icons'
import Link from 'next/link'
import React from 'react'

const projects = [
  {
    _id: 1,
    title: 'Formzillion',
    description:
      'Streamline your form creation and management. Effortlessly design, distribute, and collect data with our user-friendly platform  ',
    date: '2023-01-01',
    slug: 'formzillion',
    href: 'https://github.com/formzillion/formzillion.com',
  },
  {
    _id: 2,
    title: 'Order Assist',
    description:
      'Simplify and optimize order management processes, providing efficiency, convenience, and a seamless customer experience.',
    date: '2023-01-01',
    slug: 'order-assist',
    href: 'https://github.com/thirunavukkarasu/order-assist-app',
  },
  {
    _id: 3,
    title: 'Bottle Canvas',
    description:
      'Embark on a mesmerizing artistic journey, transforming ordinary bottles into extraordinary masterpieces through captivating painting techniques.',
    date: '2023-01-01',
    href: 'https://github.com/thirunavukkarasu/bottle-canvas',
  },
]

export default function Projects() {
  return (
    <section className="">
      <h1 className="text-lg font-semibold text-gray-700">Projects</h1>
      <p className="text-base text-gray-600">
        Creations between playtime with my small one.
      </p>
      <div className="mt-5">
        <div className="grid gap-4">
          {projects.map((project) => (
            <article
              key={project._id}
              className="group relative flex flex-row items-center justify-between space-y-2"
            >
              <div>
                <h2 className="text-base font-extrabold text-gray-700 underline">
                  {project.title}
                </h2>
                {project.description && (
                  <p className="max-w-3xl text-gray-500">
                    {project.description}
                  </p>
                )}
              </div>

              {project.date && (
                <p className="text-sm text-gray-500">
                  {formatDate(project.date)}
                </p>
              )}
              <Link
                href={project.href}
                target="_blank"
                className="absolute inset-0"
              >
                <span className="sr-only">View Project</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
