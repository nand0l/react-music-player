import React from "react";
import styled from "styled-components";
const nlu = () => {
	return (
		<nluContainer>
			<Link href="https://amzazoninstructor.info" target="_blank">
				AmazonInstructorInfo
			</Link>
		</nluContainer>
	);
};

const nluContainer = styled.div`
	user-select: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	z-index: 12;
	bottom: 5px;
	left: 5px;
	color: rgb(155, 155, 155);
	font-size: 0.75rem;
`;

const Link = styled.a`
	color: rgb(155, 155, 155);
`;
export default nlu;
