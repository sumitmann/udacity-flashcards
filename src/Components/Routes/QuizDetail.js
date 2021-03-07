import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Layout/Header';
import { getQuizs } from '../../Utils/api';
import { LinearGradient } from 'expo-linear-gradient';

class QuizDetail extends React.Component {
  state = {
    deckLastAttemptedAt: null,
    deckLastAttempted: "",
    score: 0,
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.fetchQuizs();
    });
    this.fetchQuizs();
  }

  fetchQuizs = () => {
    getQuizs()
      .then(data => {
        if (data !== null) {
          const { deckLastAttempted, deckLastAttemptedAt, score } = data;
          this.setState({ deckLastAttempted, deckLastAttemptedAt, score })
        }
      })
  }

  render() {
    const { deckLastAttempted, deckLastAttemptedAt, score } = this.state;
    return (
      <LinearGradient
        colors={['#65dfc9', '#6cdbeb']}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={{ flex: 1 }}>
        <Header
          title="Quiz Info" />
        <View
          style={styles.cardWrapper}>
          <Text
            style={styles.cardHeader}>
            Last Quiz Taken Today
          </Text>
          <View
            style={styles.horizontalRule} />
          {deckLastAttemptedAt === null
            ? <View
              style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{ paddingVertical: 12, fontSize: 16 }}>
                You didn't take any quiz today.
                </Text>
            </View>
            : <View>
              <View
                style={styles.infoWrapper}>
                <Text
                  style={styles.infoText}>
                  {deckLastAttempted}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", marginTop: 14 }}>
                <Text
                  style={styles.infoText}>
                  {new Date(deckLastAttemptedAt).toLocaleTimeString()}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", marginTop: 14 }}>
                <Text style={styles.infoText}>
                  {score}
                </Text>
              </View>
            </View>}
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "#ffffff",
    padding: 18,
    marginHorizontal: 18,
    borderRadius: 6
  },
  cardHeader: {
    fontSize: 19, fontWeight: "bold"
  },
  horizontalRule: {
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    marginTop: 14,
    marginBottom: 8
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14
  },
  infoText: {
    marginLeft: 14,
    fontSize: 18,
    paddingBottom: 2
  }
})

export default QuizDetail
