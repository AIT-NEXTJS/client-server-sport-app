import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/NavBar/NavBar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Сайт спортивных курсов',
	description: 'Платформа для онлайн-обучения различным видам спорта',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
