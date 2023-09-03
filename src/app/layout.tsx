import type { Metadata } from 'next'
import GlobalStyles from '@/styles/common/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata: Metadata = {
  title: 'Twin_NextJS + Styled-Components + TS',
  description: 'Twin_NextJS + Styled-Components + TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
