import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BookAppointment from './screens/BookAppointment'
import { NativeBaseProvider, Box, extendTheme } from 'native-base'
export default function App() {
	const theme = extendTheme({
		// backgroundColor: 'green.100',
		colors: {
			// Add new color
			primary: {
				10: '#0957DE',
			},
			// Redefinig only one shade, rest of the color will remain same.
			amber: {
				400: '#d97706',
			},
		},
		config: {
			// Changing initialColorMode to 'dark'
			initialColorMode: 'dark',
		},
		components: {
			Text: {
				baseStyle: (props) => {
					const { colorScheme } = props

					return {
						_light: {
							color: colorScheme[500],
						},
						_dark: {
							color: 'amber.500',
						},

						// fontSize: 25,
					}
				},
			},
		},
	})
	return (
		<NativeBaseProvider theme={theme}>
			<View style={styles.container}>
				{/* <Text>Open up App.js to sstart working on your app!</Text> */}
				<BookAppointment />
				<StatusBar style='auto' />
			</View>
		</NativeBaseProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
