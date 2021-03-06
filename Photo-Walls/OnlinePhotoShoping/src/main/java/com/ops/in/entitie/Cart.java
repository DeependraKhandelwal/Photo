package com.ops.in.entitie;


import java.util.HashMap;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
	@Id 
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "cart_seq")
    @SequenceGenerator(sequenceName = "cart_seq", allocationSize = 1, name = "cart_seq")
	private Integer cartId;
	
	@ElementCollection
	@JoinColumn(name="quantity")
	//@MapKey(name="productId")
	//@OneToMany(cascade = CascadeType.REFRESH,fetch = FetchType.EAGER)
	private Map<Product,Integer>products= new HashMap<Product,Integer>(); // product and quantity 
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customerId")
	private Customer customer;
	
}
