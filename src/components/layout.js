import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-3xl xl:px-0">
        <div className="flex justify-between items-center py-10">
          <Link to="/">
            <h1 class="text-4xl font-semibold tracking-tighter text-gray-900">openspot<span class="text-xl tracking-tighter ml-1 text-gray-500 uppercase">blog</span></h1>
          </Link>
        </div>
      </div>
    )
  } else {
    header = (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-3xl xl:px-0">
        <div className="flex justify-between items-center py-10">
          <Link to="/">
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900">openspot<span className="text-xl tracking-tighter ml-1 text-gray-500 uppercase">blog</span></h1>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page__wrapper antialiased" data-is-root-path={isRootPath}>
      <header className="page__header">{header}</header>
      <main className="content__wrapper">{children}</main>
    </div>
  )
}

export default Layout
