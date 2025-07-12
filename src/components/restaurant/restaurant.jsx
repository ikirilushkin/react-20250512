"use client";

import styles from "./restaurant.module.css";
import { TabLink } from "../tab-link/tab-link";

export const Restaurant = ({ id, name, description }) => {
  return (
    <div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.description}>{description}</div>
      <TabLink to={`/restaurants/${id}/menu`}>Menu</TabLink>
      <TabLink to={`/restaurants/${id}/reviews`}>Reviews</TabLink>
    </div>
  );
};
