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
	use Symfony\Component\HttpFoundation\Response;
	use FOS\RestBundle\View\View;

	class CarsController extends FOSRestController {

		/**
		 * GET Route annotation.
		 * @Get("/cars")
		 */
		public function indexAction() {
			$cars = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->findAll();
			if ( $cars === null || empty($cars)) {
				return new View( "Not found.", Response::HTTP_NOT_FOUND );
			}
			return $cars;
		}

		/**
		 * GET Route annotation.
		 * @Get("/cars/{id}")
		 */
		public function showAction( $id ) {
			$car = $this->getDoctrine()->getRepository( 'AppBundle:Car' )->find( $id );
			if ( $car === null) {
				return new View( "Not found.", Response::HTTP_NOT_FOUND );
			}
			return $car;
		}

	}