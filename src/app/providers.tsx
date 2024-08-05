'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function Providers({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000 * 5
			}
		}
	})

	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			<ReactQueryDevtools client={queryClient} />
		</>
	)
}
export default Providers
