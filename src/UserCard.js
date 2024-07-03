import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardHeader, CardBody, CardFooter, CardText } from 'reactstrap';

const UserCard = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/users/random_user');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={fetchUserData}>Fetch Random User</Button>
      {userData && (
        <Card className="mt-3">
          <CardHeader>{`${userData.first_name} ${userData.last_name}`}</CardHeader>
          <CardBody>
            <CardText>Email: {userData.email}</CardText>
            <CardText>Username: {userData.username}</CardText>
            <CardText>Address: {`${userData.address.street_address}, ${userData.address.city}, ${userData.address.state}`}</CardText>
            <CardText>Phone: {userData.phone_number}</CardText>
          </CardBody>
          <CardFooter>Subscription: {userData.subscription.plan}</CardFooter>
        </Card>
      )}
    </div>
  );
};

export default UserCard;
