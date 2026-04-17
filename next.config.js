/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      // Configuração para arquivos de imagem
      '*.png': {
        type: 'asset',
      },
      '*.jpg': {
        type: 'asset',
      },
      '*.jpeg': {
        type: 'asset',
      },
      '*.PNG': {
        type: 'asset',
      },
      '*.svg': {
        type: 'asset',
      },
      '*.gif': {
        type: 'asset',
      },
      '*.webp': {
        type: 'asset',
      },
    },
  },
}

module.exports = nextConfig