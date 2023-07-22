import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

interface EventDetailsProps {
    event: {
        photos: string[];
        name: string;
        ticketPrice: string;
        availableSeats: number;
        place: string;
        dateTime: string;
        description: string;
    };
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const EventDetails: React.FC<EventDetailsProps> = ({ route }) => {
    const { event } = route.params;

    const renderEventImage = ({ item }) => (
        <Image source={item} style={{ width: screenWidth, height: screenHeight * 0.3 }} resizeMode="contain" />
    );

    return (
        <View style={styles.container}>
            <Carousel data={event.photos} renderItem={renderEventImage} sliderWidth={screenWidth} itemWidth={screenWidth} layout="default" loop />
            <ScrollView style={styles.eventcontainer}>
                <Text style={styles.eventName}>{event.name}</Text>
                <View style={styles.ticketPriceContainer}>
                    <Icon name="ticket" size={18} color="#333" style={styles.ticketIcon} />
                    <Text style={styles.ticketPrice}>
                        Ticket Price: {event.ticketPrice} | Available Seats: {event.availableSeats}
                    </Text>
                </View>
                <View style={styles.locationContainer}>
                    <Icon name="map-marker" size={20} color="#333" style={styles.locationIcon} />
                    <Text style={styles.eventLocation}>{event.place}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Icon name="clock-o" size={20} color="#333" style={styles.timeIcon} />
                    <Text style={styles.eventTime}>{event.dateTime}</Text>
                </View>
                <Text style={styles.eventDesc}>Event Description</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.getTicketButton}>
                <Icon name="ticket" size={22} color="#fff" style={styles.ticketIcon} />
                <Text style={styles.getTicketButtonText}>Get Ticket</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    eventcontainer: {
        margin: 10,
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        margin: 5,
    },
    ticketDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ticketPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ticketIcon: {
        marginRight: 8,
    },
    ticketPrice: {
        fontSize: 16,
    },

    eventLocation: {
        fontSize: 18,
        marginBottom: 8,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    locationIcon: {
        marginRight: 8,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    timeIcon: {
        marginRight: 8,
    },
    eventTime: {
        fontSize: 18,
    },
    getTicketButton: {
        height: 50,
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#007AFF', // Add your desired background color
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginLeft: 10,
        marginRight: 10,
    },
    getTicketButtonText: {
        color: 'white', // Add your desired text color
        fontSize: 20,
    },
    eventDesc: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 8,
    },
    eventDescription: {
        fontSize: 16,
        // textAlign: 'center',
    },
});

export default EventDetails;
