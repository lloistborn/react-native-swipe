import React, { Component } from "react";
import { View, Animated, PanResponder, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;

class Deck extends Component {
	constructor(props) {
		super(props);
		
		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({
					x: gesture.dx, 
					y: gesture.dy
				})
			},
			onPanResponderRelease: () => {
				this.resetPosition();
			}
		});

		this.state = {panResponder, position};
	}

	resetPosition() {
		Animated.spring(this.state.position, {
			toValue: {x: 0, y: 0}
		}).start();
	}

	getCardStyle() {
		const {position} = this.state;
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-120deg', '0deg', '120deg']
		});

		return {
			...position.getLayout(),
			transform: [{ rotate: rotate}]
		};
	}

	renderCards() {
		return this.props.data.map((item, index) => {
			return (
				<Animated.View
					key = {item.id}
					{...this.state.panResponder.panHandlers}
					style = {this.getCardStyle()}
				>
					{this.props.renderCard(item)}
				</Animated.View>
			);
		});
	}

	render() {
		return(
			<View>
				{ this.renderCards() }
			</View>
		);
	}
}

export default Deck;