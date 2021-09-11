import React, { useState } from "react";
import Wrapper from "../component/Wrapper";
import { Input, Heading, Text, Box, Select } from "@chakra-ui/react";

const HomePage = (props) => {
  const [receptionNation, setReceptionNation] = useState("");
  const [amountOfMoney, setAmountOfMoney] = useState(0);

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
            setReceptionNation(e.target.value);
            console.log(receptionNation);
          }}
        >
          <option value="korean">한국(KRW)</option>
          <option value="japan">일본(JPY)</option>
          <option value="philippine">필리핀(PHP)</option>
        </Select>
      </Box>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          환율 : 1111 KRW/USD
        </Text>
      </Box>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          송금액 :
        </Text>
        <Input
          placeholder="송금액을 입력해주세요."
          onChange={(e) => {
            setAmountOfMoney(e.target.value);
            console.log(amountOfMoney);
          }}
        />
      </Box>
      <Box>
        <Text color={"gray.500"} fontSize={"xl"} fontWeight="bold" my={3}>
          수취금액은 123890 입니다.
        </Text>
      </Box>
    </Wrapper>
  );
};

export default HomePage;
