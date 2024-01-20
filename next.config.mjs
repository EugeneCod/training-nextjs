/* Если вы размещаете свое приложение на корневом уровне URL, например yourblog.com/, проблем 
не возникнет. Вы можете подключить пользовательский домен к своим страницам github, и это 
будет работать. Но если вы хотите иметь возможность размещать свой блог, используя свой URL 
на github, например, https://<username>.github.io/<repository-name>/ мы должны сообщить 
нашему приложению, что базовый путь - это /<repository-name>. Это исправит все относительные URL. */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: "/training-nextjs", // задать базовый путь.

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

export default nextConfig;