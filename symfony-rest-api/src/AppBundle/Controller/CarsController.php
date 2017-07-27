<?php
	/**
	 * AppBundle\Controller\CarsController
	 *
	 * User: yzubizarreta
	 * Date: 27/7/17
	 */

	namespace AppBundle\Controller;


	use FOS\RestBundle\Controller\FOSRestController;
	use FOS\RestBundle\Controller\Annotations\Get;

	class CarsController extends FOSRestController {

		/**
		 * GET Route annotation.
		 * @Get("/cars")
		 */
		public function indexAction() {
			$cars = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->findAll();
			return $cars;
		}

		/**
		 * GET Route annotation.
		 * @Get("/cars/{id}")
		 */
		public function showAction( $id ) {
			$car = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->find( $id );
			return $car;
		}

	}