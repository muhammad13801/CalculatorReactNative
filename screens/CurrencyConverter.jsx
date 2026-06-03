import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const CurrencyConverter = (props) => {
  const [dinar, setDinar] = useState("");
  const [shekel, setShekel] = useState("");
  const [rate, setRate] = useState(5.2);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/d67549d69dd0355bd2762c18/pair/JOD/ILS"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.conversion_rate) {
          setRate(data.conversion_rate);
        }
      });
  }, []);

  const dinToShek = (amt) => {
    setDinar(amt);
    if (amt && rate) {
      const s = (parseFloat(amt) * rate).toFixed(2);
      setShekel(s);
    } else {
      setShekel("");
    }
  };

  const shekToDin = (amt) => {
    setShekel(amt);
    if (amt && rate) {
      const d = (parseFloat(amt) / rate).toFixed(2);
      setDinar(d);
    } else {
      setDinar("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>محول العملات</Text>

      <View style={styles.converterContainer}>
        <Text style={styles.rateText}>
          سعر الصرف: 1 دينار = {rate.toFixed(2)} شيكل
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>المبلغ بالدينار:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dinar}
            onChangeText={dinToShek}
            placeholder="أدخل المبلغ بالدينار"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>المبلغ بالشيكل:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={shekel}
            onChangeText={shekToDin}
            placeholder="أدخل المبلغ بالشيكل"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  converterContainer: {
    width: "100%",
    backgroundColor: "#16171b",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  rateText: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#380000",
    color: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default CurrencyConverter;
