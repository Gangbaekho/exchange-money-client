import React, { useState, useEffect } from "react";
import Wrapper from "../component/Wrapper";
import { Input, Heading, Text, Box, Select, Button } from "@chakra-ui/react";
import { baseURL } from "../const";

const HomePage = (props) => {
  const [amountOfMoney, setAmountOfMoney] = useState(0);
  const [currency, setCurrency] = useState(undefined);
  const [currencyRate, setCurrencyRate] = useState(0);
  const [exchagedMoney, setExchagedMoney] = useState(0);

  useEffect(() => {
    if (currency !== undefined) {
      fetch(baseURL + "/api/v1/currency-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency: currency }),
      })
        .then((res) => res.json())
        .then((data) => {
          const currencyRate = data.currencyRate;
          setCurrencyRate(currencyRate);
        });

      setExchagedMoney(0);
      setAmountOfMoney(0);
    }
  }, [currency]);

  const handleButton = () => {
    fetch(baseURL + "/api/v1/exchanges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: currency,
        amountOfMoney: amountOfMoney,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setExchagedMoney(data.exchangedMoney);
      });
  };

  return (
    <Wrapper>
      <Heading
        color={"green.500"}
        textTransform={"uppercase"}
        fontWeight={800}
        fontSize={"3xl"}
        letterSpacing={1.1}
      >
        환율 계산
      </Heading>
      <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
        송금 국가 : 미국(USD)
      </Text>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          수취 국가 :
        </Text>
        <Select
          placeholder="수취 국가"
          onChange={(e) => {
            setCurrency(e.target.value);
            console.log(currency);
          }}
        >
          <option value="KRW">한국(KRW)</option>
          <option value="JPY">일본(JPY)</option>
          <option value="PHP">필리핀(PHP)</option>
        </Select>
      </Box>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          환율 : {currencyRate} {currency}/USD
        </Text>
      </Box>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          송금액 :
        </Text>
        <Input
          placeholder="송금액을 입력해주세요."
          onChange={(e) => {
            const inputValue = e.target.value;
            setAmountOfMoney(parseInt(inputValue));
            console.log(amountOfMoney);
          }}
        />
      </Box>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          수취금액은 {exchagedMoney} {currency} 입니다.
        </Text>
      </Box>
      <Box>
        <Button colorScheme="teal" size="md" onClick={handleButton}>
          Submit
        </Button>
      </Box>
    </Wrapper>
  );
};

export default HomePage;
